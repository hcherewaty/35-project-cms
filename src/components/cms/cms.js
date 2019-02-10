import React from 'react';

import Record from './record.js';
import Models from './models.js';
import Records from './records.js';

import '../../stylesheets/design.scss';

/**
 * 
 *
 * @export
 * @class CMS - component for calling renderring:  Models, Records, and Record components.
 * @extends {React.Component}
 */
export default class CMS extends React.Component {
  /**
   * @Method render - renders markup and Models, Records, and Record components within CMS component.
   *
   * @returns markup and rendered components.
   * @memberof CMS
   */
  render() {
    return (
      <>
        <header className="centered">
          <h1>Fun with Redux</h1>
        </header>

        <span className="centered">It's magical.</span>
        <div className="centered">
        <iframe src="https://giphy.com/embed/3tJdwcnQOZxSZunvS3" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>

        <main>
        
            <nav className="centered">
              <Models />
            </nav>

            <aside className="centered">
              <Records />
            </aside>

            <section className="centered">
              <Record />
            </section>

          </main>

          <footer>&copy; 2019 Heather Cherewaty</footer>
      </>
    );
  }
}
