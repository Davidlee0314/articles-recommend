from flask import Flask, render_template
from flask_restful import Api
from backend.article import Article
app = Flask(__name__,
            static_folder='./frontend/dist/static',
            template_folder = "./frontend/dist")
@app.route('/')
def index():
    return render_template("index.html")
api = Api(app)
api.add_resource(Article, '/api/articles')
if __name__ == '__main__':
    app.run()