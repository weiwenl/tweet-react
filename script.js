class TweetItem extends React.Component {

    render() {
        return (
          <div>
              <img src="{this.props.tweet.profile_image_url}"></img>
              <ul>
                  <li>{this.props.tweet.user.name} {'@' + this.props.tweet.user.screen_name}</li>
                  <li>{this.props.tweet.text}</li>
                  
                  <li>{this.props.tweet.retweet_count}</li>
                  <li>{this.props.tweet.favorite_count}</li>
              </ul>
          </div>
        );
    }
};

class TweetList extends React.Component {
    render() {
      let contents = this.props.tweets.map((tweet, i) => {
        console.log( tweet );
        return <TweetItem key={i} tweet={tweet} />
      });
      console.log( contents );
      return(
        <div>
          <nav>{tweets[0].user.name}</nav>
          <nav>Tweets Tweets & replies Media Likes</nav>
          <hr></hr>
        <ul>
          {contents}
        </ul>
      </div>
      );
    }
};

ReactDOM.render(
    <TweetList tweets={tweets} />,
    document.getElementById('root')
);
