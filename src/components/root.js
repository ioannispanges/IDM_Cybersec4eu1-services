import React from 'react';

function Root(props) {
  return (
    <div style={{ height: "110vh" }}>
      <div style={styles.content}>
        { props.children }
      </div>
    </div>
  );
}

const styles = {
  paper: {
    display: "flex",
    width: "100%",
    height: "100%",
    background: "#F4F4F4",
  },
  content: {
    padding: '1em',
    flex: '1 0 auto',
  }
}

export default Root;
