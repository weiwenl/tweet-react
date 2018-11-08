class TweetItem extends React.Component {

    render() {
        return (
          <li>{this.props.user.name}</li>
        );
    }
}

class TweetList extends React.Component {
    render() {
      let contents = this.props.tweets.map((tweet, i) => {
        console.log( tweet );
        return <TweetItem tweet={tweet}><TweetItem>

          {/* <tr>
             <td key={i}>{tweet.user.name}</td>
             <td key={i}>{'@' + tweet.user.screen_name}</td>
          </tr> */}

      });

      return(
        <table>
          {contents}
        </table>
      );
    }
}

ReactDOM.render(
    <div><TweetList tweets={tweets}/></div>,
    document.getElementById('root')
);
