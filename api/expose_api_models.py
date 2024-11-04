from safrs import SAFRSAPI
import safrs
import importlib
import pathlib
import logging as logging

# use absolute path import for easier multi-{app,model,db} support
database = __import__('database')

app_logger = logging.getLogger(__name__)

app_logger.debug("\napi/expose_api_models.py - endpoint for each table")


def expose_models(api, method_decorators = []): 
    """
        Declare API - on existing SAFRSAPI to expose each model - API automation 
        - Including get (filtering, pagination, related data access) 
        - And post/patch/update (including logic enforcement) 

        Invoked at server startup (api_logic_server_run) 

        You typically do not customize this file 
        - See https://apilogicserver.github.io/Docs/Tutorial/#customize-and-debug 
    """
    api.expose_object(database.models.Ball, method_decorators= method_decorators)
    api.expose_object(database.models.BallMovement, method_decorators= method_decorators)
    api.expose_object(database.models.Game, method_decorators= method_decorators)
    api.expose_object(database.models.Collision, method_decorators= method_decorators)
    api.expose_object(database.models.GameSetting, method_decorators= method_decorators)
    api.expose_object(database.models.Leaderboard, method_decorators= method_decorators)
    api.expose_object(database.models.Player, method_decorators= method_decorators)
    api.expose_object(database.models.Match, method_decorators= method_decorators)
    api.expose_object(database.models.Paddle, method_decorators= method_decorators)
    api.expose_object(database.models.PowerUp, method_decorators= method_decorators)
    api.expose_object(database.models.Score, method_decorators= method_decorators)
    api.expose_object(database.models.Tournament, method_decorators= method_decorators)
    return api
