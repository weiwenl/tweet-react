class TweetItem extends React.Component {

    render() {
        return (
          <li>
            <p><Banana /></p>
            {this.props.user.name}
            {this.props.user.name}
            {this.props.user.name}
            {this.props.user.name}
            {this.props.user.name}

            {this.props.user.name}
          </li>
        );
    }
};

class TweetList extends React.Component {
    render() {
      let contents = this.props.tweets.map((tweet, i) => {
        console.log( tweet );
        return <TweetItem tweet={tweet}><TweetItem>
      });
      console.log( contents );
      return(
        <div>
          <DateTime />
        <ul>
          {contents}
        </ul>
      </div>
      );
    }
};

ReactDOM.render(
    <TweetList tweets={fff} />,
    document.getElementById('root')
);
