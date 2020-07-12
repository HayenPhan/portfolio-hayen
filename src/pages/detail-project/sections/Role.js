import React from 'react';

import styled from 'styled-components';

const SectionRole = styled.section`
  width: 100%;
  position: absolute;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 20px;
  top: ${(props) => props.project === 'Banzai' ? '1000px' : props.project === 'Plantacle' ? '1000px' : '1000px' };
  height: 500px;
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
      justify-content: flex-start;
  }

  @media (min-width: 500px) {
      top: ${(props) => props.project === 'Banzai' ? '960px' : props.project === 'Plantacle' ? '960px' : '1150px' };
  }


  @media (min-width: 768px) {
      height: 2240px;
      top: ${(props) => props.project === 'Banzai' ? '1080px' : props.project === 'Plantacle' ? '1080px' : '1240px' };
  }

  @media (min-width: 1024px) {
      top: ${(props) => props.project === 'Banzai' ? '720px' : props.project === 'Plantacle' ? '720px' : '860px' };
      height: 500px;
  }


  @media (min-width: 1200px) {
      top: ${(props) => props.project === 'Banzai' ? '600px' : props.project === 'Plantacle' ? '600px' : '700px' };
  }

`

class Role extends React.Component {
  render(props) {
    return (
        <SectionRole project={this.props.project}>
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
