#!/bin/bash


bin/rake db:reset sync db:seed

rails s -b 0.0.0.0
