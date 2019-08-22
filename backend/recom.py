import pandas as pd
import numpy as np
import pickle
from sklearn.metrics.pairwise import cosine_similarity
import requests
import json
import re
import bz2

class Recom():
    def __init__(self, txt):
        with open('./backend/static/new_data.pkl','rb') as f:
            self.data = pickle.load(f)
        with open('./backend/static/tfidf_model.pkl','rb') as f:
            self.model = pickle.load(f)
        with bz2.BZ2File('./backend/static/result.pbz2', 'r') as f:
            self.res = pickle.load(f)
        # with open('./backend/static/result.pkl', 'rb') as f:
        #     self.res = pickle.load(f)

        # cut list
        self.input_cut = self.input_processing(txt)

    def input_processing(self, txt):
        data = {
            "username": "yenyenhsu0709@gmail.com",
            "api_key": "WSsSSc42hwfq4Z9lnIIGXvSJpQ75cab",
            "input_str": txt,
            "version": "latest",
            "level": "lv1",
            "opendata_place": True
        }
        data = json.dumps(data, ensure_ascii=False).encode('utf-8')
        r = requests.post('https://api.droidtown.co/Articut/API/', \
            headers = {'Content-type': 'application/json'}, data = data)
        r = json.loads(r.text)
        return r['result_segmentation'].split('/')

    def get_recommendation(self):
        sim = cosine_similarity(self.model.transform(self.input_cut), self.res)
        sim = pd.Series(np.sum(sim,axis = 0))
        sim = sim.sort_values(ascending=False)
        topn_index = sim[:10].index

        topn_list = []
        for i in range(10):
            temp = {}
            temp['topic'] = self.data.iloc[topn_index[i]]['title']
            temp['url'] = self.data.iloc[topn_index[i]]['url']
            topn_list.append(temp)
        return topn_list