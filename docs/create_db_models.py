# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, DateTime, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship
from datetime import datetime

Base = declarative_base()

class Player(Base):
    """description: Represents a player in the Pong game."""
    __tablename__ = 'player'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=True)

class Game(Base):
    """description: Represents a game session in Pong."""
    __tablename__ = 'game'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    start_time = Column(DateTime, default=datetime.now)
    end_time = Column(DateTime, nullable=True)

class Paddle(Base):
    """description: Represents a player's paddle in the game."""
    __tablename__ = 'paddle'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'), nullable=False)
    length = Column(Integer, nullable=False)
    player = relationship('Player', backref='paddles')

class Ball(Base):
    """description: Represents the ball used in the Pong game."""
    __tablename__ = 'ball'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    radius = Column(Integer, nullable=False)

class Score(Base):
    """description: Tracks the score of a player in a game."""
    __tablename__ = 'score'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'), nullable=False)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    points = Column(Integer, default=0)
    player = relationship('Player', backref='scores')
    game = relationship('Game', backref='scores')

class GameSettings(Base):
    """description: Stores configurable settings for a game."""
    __tablename__ = 'game_settings'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    difficulty = Column(String, nullable=False)
    max_score = Column(Integer, nullable=False)
    game = relationship('Game', backref='settings')

class Match(Base):
    """description: Represents a match between two players."""
    __tablename__ = 'match'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    player1_id = Column(Integer, ForeignKey('player.id'), nullable=False)
    player2_id = Column(Integer, ForeignKey('player.id'), nullable=False)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    player1 = relationship('Player', foreign_keys=[player1_id])
    player2 = relationship('Player', foreign_keys=[player2_id])
    game = relationship('Game', backref='matches')

class BallMovement(Base):
    """description: Records the movement details of the ball."""
    __tablename__ = 'ball_movement'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    timestamp = Column(DateTime, default=datetime.now)
    position_x = Column(Float, nullable=False)
    position_y = Column(Float, nullable=False)
    game = relationship('Game', backref='ball_movements')

class Collision(Base):
    """description: Tracks collision events during a game."""
    __tablename__ = 'collision'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    timestamp = Column(DateTime, default=datetime.now)
    object_type = Column(String, nullable=False)  # 'Wall', 'Paddle', 'Boundary', etc.
    game = relationship('Game', backref='collisions')

class PowerUp(Base):
    """description: Power-ups that can be collected in the game."""
    __tablename__ = 'power_up'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    game_id = Column(Integer, ForeignKey('game.id'), nullable=False)
    type = Column(String, nullable=False)
    duration = Column(Integer, nullable=False)  # Duration in seconds
    game = relationship('Game', backref='power_ups')

class Leaderboard(Base):
    """description: Historical performance records of players."""
    __tablename__ = 'leaderboard'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    player_id = Column(Integer, ForeignKey('player.id'), nullable=False)
    games_played = Column(Integer, default=0)
    games_won = Column(Integer, default=0)
    player = relationship('Player', backref='leaderboards')

class Tournament(Base):
    """description: A collection of matches part of a tournament."""
    __tablename__ = 'tournament'
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    date = Column(DateTime, default=datetime.now)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

Session = sessionmaker(bind=engine)
session = Session()

# Sample Data
player1 = Player(name='Alice', email='alice@example.com')
player2 = Player(name='Bob', email='bob@example.com')
game1 = Game()
paddle1 = Paddle(player=player1, length=50)
paddle2 = Paddle(player=player2, length=60)
ball1 = Ball(radius=5)
score1 = Score(player=player1, game=game1, points=10)
score2 = Score(player=player2, game=game1, points=8)
game_settings1 = GameSettings(game=game1, difficulty='Medium', max_score=21)
match1 = Match(player1=player1, player2=player2, game=game1)
ball_movement1 = BallMovement(game=game1, position_x=0.5, position_y=1.2)
collision1 = Collision(game=game1, object_type='Wall')
power_up1 = PowerUp(game=game1, type='Speed Boost', duration=10)
leaderboard1 = Leaderboard(player=player1, games_played=5, games_won=3)
tournament1 = Tournament(name='Summer Tournament')

session.add_all([
    player1, player2, game1, paddle1, paddle2, ball1, score1, score2,
    game_settings1, match1, ball_movement1, collision1, power_up1, leaderboard1, tournament1
])

session.commit()
session.close()
