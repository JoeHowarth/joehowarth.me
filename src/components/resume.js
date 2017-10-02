import React from 'react';
import resumePDF from '../assets/resume.pdf';
import {CenterWrapper, Content} from './prestyled';
import { Document, Page } from 'react-pdf/build/entry.webpack';

export default class Resume extends React.Component {

  render() {
    return (
      <Content>
        {/* <h1>Wow, what a resume!</h1> */}
        <div className="pdf">
          <Document file={resumePDF} >
            <Page pageNumber={1} width={Math.min(800, document.body.clientWidth - 52)} />
          </Document>
        </div>
      </Content>
    );
  }
}
