from flask_restful import Resource
from flask import Response, jsonify, request
from backend.recom import Recom

class Article(Resource):
    def post(self):
        d = request.get_json(force=True)
        r = Recom(d['data'])
        ar_list = r.get_recommendation()
        return jsonify(ar_list)
