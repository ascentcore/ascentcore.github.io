# AscentCore

### See the live site at [ascentcore.com](https://ascentcore.com)!

This repository contains the source code used to generate the AscentCore.com website and the generated static HTML. The website is powered by [Jekyll](https://jekyllrb.com/) and hosted by GitHub pages. 

## Usage

The [Install and Run with Docker](#Install-and-Run-with-Docker) section below explains how to set up local development. 

The site is using the static site generator [Jekyll](https://jekyllrb.com/). Jekyll uses Markdown, Liquid, HTML, and SCSS to generate a static website hosted in the same repo. GitHub pages take care of the rest.

The development environment uses the Jekyll Docker image, so no need to install ruby, gems, and other dependencies to work on the website. 

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
    
The docker-compose will run the Jekyll image and map the current folder as a volume. Jekyll will run with the `-livereload` flag to regenerate the site when one changes the source files.


### Install and Run (not recommended)

This is not the recommended development setup, but if you want to do it, a Gemfile is available in the repo. Follow the instruction from [Jekyll] website(https://jekyllrb.com/) 


## Publishing

GitHub Pages uses the configured branch to serve the content. After you push a change to the website into master, we can open a PR to merge `master` to the publishing branch.  

## Steps for creating blog post

1. Marketing creates a new issue in GitHub for the new post
   - Using "New issue"
   - Then "New blog post template"
   - Enter a title in the "New blog post [Add title here]" field
   - Enter the links for the image and content
   - Enter the title and short description inside the quotation marks
   - Enter the blog content of the post
      - We use "#" to mark a title
      - We use "##" to mark a subtitle
      - We use "*" for unorder list
      - We use "-" for order list

2. The developer will ask when the post needs to be published and will schedule the issue accordingly: The developer will prioritize the issue depending on the urgency.

3. The developer will follow the Git Development Flow
   - In the "_posts" folder a new .md file is created with the title established with Marketing
   - Fill in "layout", "img", "title", "description"
   - Copying content received from Marketing

4. The developer will publish the changes live.