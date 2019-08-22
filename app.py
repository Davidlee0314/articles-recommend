from flask import Flask, render_template
from flask_restful import Api
from backend.article import Article
import time
from flask import g

app = Flask(__name__,
            static_folder='./frontend/dist/static',
            template_folder = "./frontend/dist")
@app.route('/')
def index():
    return render_template("index.html")
api = Api(app)
api.add_resource(Article, '/api/articles')

# timing
# @app.before_request
# def before_request():
#     g.start = time.time()

# @app.after_request
# def after_request(response):
#     diff = time.time() - g.start
#     print(diff)
#     # if ((response.response) and
#     #     (200 <= response.status_code < 300) and
#     #     (response.content_type.startswith('text/html'))):
#     #     response.set_data(response.get_data().replace(
#     #         b'__EXECUTION_TIME__', bytes(str(diff), 'utf-8')))
#     return response