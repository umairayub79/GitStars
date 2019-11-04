import React, { Component } from 'react'
import "../style/RepoList.css"


export default class RepoList extends Component {
  state = {
    isLoading: true,
    items: [],
    error: null
  }
  
  
   componentDidMount(){
    this.fetchUsers();

  }

  fetchUsers() {
    // Where we're fetching data from
    fetch(`https://api.github.com/search/repositories?q=stars%3A%3E0&sort=stars&per_page=30`)
      // We get the API response and receive data in JSON format...
      .then(response => response.json())
      // ...then we update the users state
      .then(data =>
        this.setState({
          items: data.items,
          isLoading: false,
        })
      )
      // Catch any errors we hit and update the app
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, items, error } = this.state;

    return(
      <div className="Repos">
          {error ? <p>{error.message}</p> : null}
          {!isLoading ? (
      <ul className='popular-list'>
			{items.map(({ name, stargazers_count, owner, html_url }, index) => {
				return (
          
					<li key={name} 
						className='popular-item'>
						<div className='popular-rank'>#{index + 1}</div>
						<ul className='space-list-items'>
							<li>
								<img 
									className='avatar'
									src={owner.avatar_url}
									alt={`Avatar for ${owner.login}`} />
							</li>
							<li>
								<a href={html_url}>{name} > </a>
							</li>
							<li>@{owner.login}</li>
							<li>{stargazers_count} stars</li>
						</ul>
					</li>
				)
			})}
		</ul>

          // If there is a delay in data, let's let the user know it's loading
          ) : (
            <h3 className="loading">Loading...</h3>
          )}
      </div>
        )
  
  }
}

