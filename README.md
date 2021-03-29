# Ascentcore Website

### See the live site at [ascentcore.com](https://ascentcore.com)!

This repository contains the source code used to generate the AscentCore.com website, as well as the generated static HTML. The website is powered by [Jekyll](https://jekyllrb.com/) and hosted by GitHub pages. 

## Usage

The [Install and Run with Docker](#Install-and-Run-with-Docker) section below explains how to setup local development. 

The site is using the static site generator [Jekyll](https://jekyllrb.com/). Jekyll is using Markdown, Liquid, HTML and SCSS to generate a static website that is hosted in the same repo. GitHub pages takes care of the rest.

The development environment is using the jekyll docker image so no need to install ruby, gems and other dependencies to work on the website. 

## Requirements

- Docker 17.06 or greater
- Docker Compose (should come with Docker)

## Install and Run with Docker

### Install requirements

1. Install Docker Desktop:
   - macOS: https://docs.docker.com/docker-for-mac/install/
   - Windows: https://docs.docker.com/docker-for-windows/install/
    

### Installing, building, and serving the site via Docker

1. Run Docker Compose in the terminal. Make sure you're in the root folder:
   - `docker-compose up`
1. View the site in your browser accessing:
   - http://0.0.0.0:4000
    
The docker-compose will run the Jekyll image and map the current folder as a volume. Jekyll will run with the `--livereload` flag, so will regenerate the site when changes are saved to the source files.


### Install and Run (not recommended)

This is not the recommended development setup, but if you want to do if, there is a Gemfile is available in the repo. Follow the instruction from [Jekyll] website(https://jekyllrb.com/) 


## Publishing

GitHub Pages uses the configured branch to serve the content. After a change is pushed to master, tested and verified, then we can open a PR to merge `master` to the publishing branch.  
