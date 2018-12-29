import React from 'react'

const Panel = ({ title, children }) => (
  <div className="Panel">
    <div className="PanelTitle">{title}</div>
    <div className="PanelContents">
      {children}
    </div>
  <style jsx>{`
    .Panel {
      padding: 1rem;
      flex: 1;
      border: 1px solid #ccc;
      margin-right: 1rem;
      margin-left: 1rem;
    }  
    .PanelTitle {
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 3rem;
      border-bottom: 1px solid #ccc;
      font-weight: 500;
    }
    .PanelContents {
      font-size: 1.5rem;
    }
  `}</style>
  </div>
)

export default Panel
