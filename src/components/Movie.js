import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = [];
    const movie = movies.find(movie=>movie.id===Number(id));
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{props.movies.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{props.movies.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{props.movies.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{props.movies.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{props.movies.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{props.movies.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state =>{
    return{
        movies: state.movies
    }
}

export default connect(mapStateToProps)(Movie);