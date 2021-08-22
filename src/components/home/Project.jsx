import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

const dummyProject = {
  name: null,
  description: null,
  svn_url: null,
  stargazers_count: null,
  languages_url: null,
  pushed_at: null,
};
const API = "https://api.github.com";
// const gitHubQuery = "/repos?sort=updated&direction=desc";
// const specficQuerry = "https://api.github.com/repos/hashirshoaeb/";

const Project = ({ heading, username, length, specfic }) => {
  const allReposAPI = `${API}/users/${username}/repos?sort=updated&direction=desc`;
  const specficReposAPI = `${API}/repos/${username}`;
  const dummyProjectsArr = new Array(length + specfic.length).fill(
    dummyProject
  );

  const [projectsArray, setProjectsArray] = useState([]);

  const fetchRepos = useCallback(async () => {
    let repoList = [];
    try {
      // getting all repos
      const response = await axios.get(allReposAPI);
      // slicing to the length
      repoList = [...response.data.slice(0, length)];
      // adding specified repos
      try {
        for (let repoName of specfic) {
          const response = await axios.get(`${specficReposAPI}/${repoName}`);
          repoList.push(response.data);
        }
      } catch (error) {
        console.error(error.message);
      }
      // setting projectArray
      // TODO: remove the duplication.
      setProjectsArray(repoList);
    } catch (error) {
      console.error(error.message);
    }
  }, [allReposAPI, length, specfic, specficReposAPI]);

  useEffect(() => {
    fetchRepos();
  }, [fetchRepos]);

  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>

          <div>

            <div class="responsive">
              <div class="gallery">
              <a href="https://drive.google.com/drive/folders/1zM-RGf8rLXGfWm1d6-n5gxq55tTF4tb3?usp=sharing" target="_blank">
                  <img src={require("./1.png")} />
                </a>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a href="https://drive.google.com/drive/folders/1L0Hu2z5gWBSBKd8vz8a3hwd7_CWsBk8r?usp=sharing" target="_blank">
                  <img src={require("./2.png")} />
                </a>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a href="https://drive.google.com/drive/folders/158QSDuzDOzihME3roUD2dqWf2V-dRDlP?usp=sharing" target="_blank">
                  <img src={require("./3.png")} />
                </a>
              </div>
            </div>

            <div class="responsive">
              <div class="gallery">
                <a href="https://drive.google.com/drive/folders/1d15Y1ZJG5uNqOWSa6aLBxZdFMNa4gwwQ?usp=sharing" target="_blank">
                  <img src={require("./4.png")} />
                </a>
              </div>
            </div>

            <div class="clearfix"></div>
          </div>
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default Project;
