class HelloMessage extends React.Component {
  render() {
<<<<<<< HEAD
    return (
      <div>
        Ciao {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Claudia" />,
  document.getElementById('hello-example')
);
=======
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
>>>>>>> ee7705675d2304c53c174b9fb316e2fbde1e9fb3
