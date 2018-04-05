# Python SQL toolkit and Object Relational Mapper
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.ext.automap import automap_base
from sqlalchemy import Column, Integer, String, Float
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import os 

# sqlite_db_path = os.path.join('app','non-static','us_data.sqlite')
sqlite_db_path = os.path.join('non-static','belly_button_biodiversity.sqlite')

# Create engine using the `us_data.sqlite` database file
engine = create_engine(f'sqlite:///{sqlite_db_path}')

# Declare a Base using `declarative_base()`
Base = automap_base()

Base.prepare(engine, reflect=True)

Otu = Base.classes.otu
Samples= Base.classes.samples
Samples_metadata= Base.classes.samples_metadata
# Otu = Base.classes.otu


# create session object
session = Session(engine)

# # assign table to Contracts variable
# Otu_ = session.query(Otu)
# Samples_ = session.query(Samples)