# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Column, DateTime, Float, ForeignKey, Integer, String
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  November 04, 2024 08:08:37
# Database: sqlite:////tmp/tmp.e9UjxgsrrD/sqoin3/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Ball(SAFRSBaseX, Base):
    """
    description: Represents the ball used in the Pong game.
    """
    __tablename__ = 'ball'
    _s_collection_name = 'Ball'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    radius = Column(Integer, nullable=False)

    # parent relationships (access parent)

    # child relationships (access children)



class Game(SAFRSBaseX, Base):
    """
    description: Represents a game session in Pong.
    """
    __tablename__ = 'game'
    _s_collection_name = 'Game'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    start_time = Column(DateTime)
    end_time = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    BallMovementList : Mapped[List["BallMovement"]] = relationship(back_populates="game")
    CollisionList : Mapped[List["Collision"]] = relationship(back_populates="game")
    GameSettingList : Mapped[List["GameSetting"]] = relationship(back_populates="game")
    MatchList : Mapped[List["Match"]] = relationship(back_populates="game")
    PowerUpList : Mapped[List["PowerUp"]] = relationship(back_populates="game")
    ScoreList : Mapped[List["Score"]] = relationship(back_populates="game")



class Player(SAFRSBaseX, Base):
    """
    description: Represents a player in the Pong game.
    """
    __tablename__ = 'player'
    _s_collection_name = 'Player'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    email = Column(String)

    # parent relationships (access parent)

    # child relationships (access children)
    LeaderboardList : Mapped[List["Leaderboard"]] = relationship(back_populates="player")
    MatchList : Mapped[List["Match"]] = relationship(foreign_keys='[Match.player1_id]', back_populates="player1")
    player2MatchList : Mapped[List["Match"]] = relationship(foreign_keys='[Match.player2_id]', back_populates="player2")
    PaddleList : Mapped[List["Paddle"]] = relationship(back_populates="player")
    ScoreList : Mapped[List["Score"]] = relationship(back_populates="player")



class Tournament(SAFRSBaseX, Base):
    """
    description: A collection of matches part of a tournament.
    """
    __tablename__ = 'tournament'
    _s_collection_name = 'Tournament'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)



class BallMovement(SAFRSBaseX, Base):
    """
    description: Records the movement details of the ball.
    """
    __tablename__ = 'ball_movement'
    _s_collection_name = 'BallMovement'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'), nullable=False)
    timestamp = Column(DateTime)
    position_x = Column(Float, nullable=False)
    position_y = Column(Float, nullable=False)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("BallMovementList"))

    # child relationships (access children)



class Collision(SAFRSBaseX, Base):
    """
    description: Tracks collision events during a game.
    """
    __tablename__ = 'collision'
    _s_collection_name = 'Collision'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'), nullable=False)
    timestamp = Column(DateTime)
    object_type = Column(String, nullable=False)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("CollisionList"))

    # child relationships (access children)



class GameSetting(SAFRSBaseX, Base):
    """
    description: Stores configurable settings for a game.
    """
    __tablename__ = 'game_settings'
    _s_collection_name = 'GameSetting'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'), nullable=False)
    difficulty = Column(String, nullable=False)
    max_score = Column(Integer, nullable=False)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("GameSettingList"))

    # child relationships (access children)



class Leaderboard(SAFRSBaseX, Base):
    """
    description: Historical performance records of players.
    """
    __tablename__ = 'leaderboard'
    _s_collection_name = 'Leaderboard'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'), nullable=False)
    games_played = Column(Integer)
    games_won = Column(Integer)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("LeaderboardList"))

    # child relationships (access children)



class Match(SAFRSBaseX, Base):
    """
    description: Represents a match between two players.
    """
    __tablename__ = 'match'
    _s_collection_name = 'Match'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player1_id = Column(ForeignKey('player.id'), nullable=False)
    player2_id = Column(ForeignKey('player.id'), nullable=False)
    game_id = Column(ForeignKey('game.id'), nullable=False)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("MatchList"))
    player1 : Mapped["Player"] = relationship(foreign_keys='[Match.player1_id]', back_populates=("MatchList"))
    player2 : Mapped["Player"] = relationship(foreign_keys='[Match.player2_id]', back_populates=("player2MatchList"))

    # child relationships (access children)



class Paddle(SAFRSBaseX, Base):
    """
    description: Represents a player's paddle in the game.
    """
    __tablename__ = 'paddle'
    _s_collection_name = 'Paddle'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'), nullable=False)
    length = Column(Integer, nullable=False)

    # parent relationships (access parent)
    player : Mapped["Player"] = relationship(back_populates=("PaddleList"))

    # child relationships (access children)



class PowerUp(SAFRSBaseX, Base):
    """
    description: Power-ups that can be collected in the game.
    """
    __tablename__ = 'power_up'
    _s_collection_name = 'PowerUp'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    game_id = Column(ForeignKey('game.id'), nullable=False)
    type = Column(String, nullable=False)
    duration = Column(Integer, nullable=False)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("PowerUpList"))

    # child relationships (access children)



class Score(SAFRSBaseX, Base):
    """
    description: Tracks the score of a player in a game.
    """
    __tablename__ = 'score'
    _s_collection_name = 'Score'  # type: ignore
    __bind_key__ = 'None'

    id = Column(Integer, primary_key=True)
    player_id = Column(ForeignKey('player.id'), nullable=False)
    game_id = Column(ForeignKey('game.id'), nullable=False)
    points = Column(Integer)

    # parent relationships (access parent)
    game : Mapped["Game"] = relationship(back_populates=("ScoreList"))
    player : Mapped["Player"] = relationship(back_populates=("ScoreList"))

    # child relationships (access children)
