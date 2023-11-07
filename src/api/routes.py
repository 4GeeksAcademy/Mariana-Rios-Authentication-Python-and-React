"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity



api = Blueprint('api', __name__)


@api.route('/signup', methods=['POST'])
def create_user():
    new_email = request.json.get("email", None)
    new_password = request.json.get("password", None)
    user = User.query.filter_by(email=new_email).first()
    if user:
        return jsonify({"msg": "This email already has an account, try a different one."}), 401
    new_user = User(email=new_email, password=new_password)
    db.session.add(new_user)
    db.session.commit()

    response_body = {
        "message": "New user created"
    }

    return jsonify(response_body), 200



@api.route('/login', methods=['POST'])
def login():
    email = request.json.get("email", None)
    password = request.json.get("password", None)
    # Query your database for username and password
    user = User.query.filter_by(email=email, password=password).first()
    if user is None:
        # the user was not found on the database
        return jsonify({"msg": "Bad username or password"}), 401
    
    access_token = create_access_token(identity=user.id)
    return jsonify({ "token": access_token, "user_id": user.id })

@api.route("/private", methods=["GET"])
@jwt_required()
def protected():
    # Access the identity of the current user with get_jwt_identity
    current_user = get_jwt_identity()
    return jsonify(logged_in_as=current_user), 200