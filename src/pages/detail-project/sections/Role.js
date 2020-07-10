import React from 'react';

import styled from 'styled-components';

const SectionRole = styled.section`
  width: 100%;
  position: absolute;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  top: 1000px;
  height: 500px;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
      justify-content: flex-start;
  }

  @media (min-width: 500px) {
      top: 960px;
  }

  @media (min-width: 692px) {
  }


  @media (min-width: 768px) {
      height: 2240px;
      top: 1080px;
  }

  @media (min-width: 768px) {
      height: 1350px;
  }


  @media (min-width: 1024px) {
      top: 720px;
      height: 500px;
  }

  @media (min-width: 1200px) {
      top: 600px;
  }

`

class Role extends React.Component {
  render(props) {
    return (
        <SectionRole>
          <div className="role__text-wrapper">
              <div class="intro-detail__wave"> </div>
              <div className="role__text">
                  <p className="intro-detail__info"> <b> Role: </b> {this.props.role}</p>
                  <p className="intro-detail__info"> <b> Responsibility: </b> {this.props.responsibility}</p>
                  <p className="intro-detail__info"> <b> Build: </b> {this.props.build}</p>
              </div>
          </div>
        </SectionRole>

    )
  }
}

export default Role;
