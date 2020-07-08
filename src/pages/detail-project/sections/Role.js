import React from 'react';


class Role extends React.Component {
  render(props) {
    return (
        <section className="role">
          <div className="role__text-wrapper">
              <div className="role__text">
                  <p className="intro-detail__info"> <b> Role: </b> {this.props.role}</p>
                  <p className="intro-detail__info"> <b> Responsibility: </b> {this.props.responsibility}</p>
                  <p className="intro-detail__info"> <b> Build: </b> {this.props.build}</p>
              </div>
          </div>
        </section>

    )
  }
}

export default Role;
