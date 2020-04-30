import React from 'react';
import PageNumber from './../../../components/atoms/PageNumber';
import Mockup from './../../../components/atoms/Mockup';
import ProjectText from './../../../components/molecules/ProjectText';
import styled from 'styled-components';

const ProjectSection = styled.section`
    width: 100%;
    height: 850px;
    position: absolute;
    top: ${(props) => props.title ? props.topXxs : ""};
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-right: 50px;

    @media (min-width: 500px) {
        //height: 900px;
        top: ${(props) => props.title ? props.topXs : ""};
    }

    @media (min-width: 768px) {
        //height: 900px;
        top: ${(props) => props.title ? props.topSm : ""};
        height: 1024px;
    }

    @media (min-width: 1024px) {
        //height: 900px;
        top: ${(props) => props.title ? props.topMd : ""};
        height: 650px;
        position: relative;
        flex-direction: row;
        padding: 0;
    }

    @media (min-width: 1200px) {
        //height: 900px;
        top: ${(props) => props.title ? props.topLg : ""};
        height: 700px;
    }
`;

const Project = (props) => {
  console.log(props.topXxs);
    return(
        <ProjectSection
          className="project"
          id="section3"
          title={props.title}
          topXxs={props.topXxs}
          topXs={props.topXs}
          topSm={props.topSm}
          topMd={props.topMd}
          topLg={props.topLg}
          >
            <div className="project__pagenumber--wrapper">
                <PageNumber title={props.title} count={props.count}> </PageNumber>
            </div>
            <h2 className="project__title"> {props.title} </h2>
            <Mockup title={props.title} widthPlantacle={props.widthPlantacle} widthBanzai={props.widthBanzai} heightPlantacle={props.heightPlantacle} heightBanzai={props.heightBanzai}> </Mockup>
            <div className="project__right-block">
                <ProjectText title={props.title} text={props.text} buttonLink={props.buttonLink}> </ProjectText>
            </div>
        </ProjectSection>
    )
};

export default Project;
