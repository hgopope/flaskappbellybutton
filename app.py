from flask import Flask, render_template, redirect, jsonify
from model import session, Otu, Samples, Samples_metadata

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')
    

@app.route('/names')
def names():
    # query db for sample names
    sample_names = Samples.__table__.columns._data.keys()[1:]
    return jsonify(sample_names)


@app.route('/otu')
def otu():
    # query db otu descriptions
    otu_desc = session.query(Otu)
    # convert to list of values rather than list of tuples
    otu_desc = {desc.otu_id: desc.lowest_taxonomic_unit_found for desc in otu_desc}
    return jsonify(otu_desc)


@app.route('/metadata/<sample>')
def metadata(sample):

    sample = sample.lstrip('BB_')

    meta_data = (session.query(Samples_metadata)
            .filter(Samples_metadata.SAMPLEID == sample))

    for meta in meta_data:
        meta_dict = {
        'AGE': meta.AGE,
        'BBTYPE': meta.BBTYPE,
        'ETHNICITY': meta.ETHNICITY,
        'GENDER': meta.GENDER,
        'LOCATION': meta.LOCATION,
        'SAMPLEID': meta.SAMPLEID,
        }

    return jsonify(meta_dict)


@app.route('/wfreq/<sample>')
def wfref(sample):

    sample = sample.lstrip('BB_')

    meta_data = (session.query(Samples_metadata)
            .filter(Samples_metadata.SAMPLEID == sample))

    for meta in meta_data:
        
        meta_dict = {
        'WEEKLY WASHING FREQUENCY': meta.WFREQ
        }
    
    return jsonify(meta_dict)


@app.route('/sample/<sample>')
def sample(sample):
    # query db for sample value and otu_id
    sample_query = session.query(Samples.otu_id, getattr(Samples, sample))

    # sort sample values in descending order
    sample_query = sorted(sample_query, key=lambda x: x[1], reverse=True)

    # create dict with lists of ids and sample values  
    sample_dict = {
        'otu_ids': [otu[0] for otu in sample_query],
        'sample_values': [otu[1] for otu in sample_query]
    }

    return jsonify(sample_dict)


if __name__ == '__main__':
    app.run(debug=True)




