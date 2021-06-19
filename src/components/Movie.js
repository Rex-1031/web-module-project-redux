import React from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { deleteMovie } from '../actions/movieActions';


const Movie = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const movies = [];
    const movie = movies.find(movie=>movie.id===Number(id));
    
    return(<div className="modal-page col">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">						
                    <h4 className="modal-title">{props.title} Details</h4>
                </div>
                <div className="modal-body">
                    <div className="flexContainer">

                        <section className="movie-details">
                            <div>
                                <label>Title: <strong>{props.title}</strong></label>
                            </div>
                            <div>
                                <label>Director: <strong>{props.director}</strong></label>
                            </div>
                            <div>
                                <label>Genre: <strong>{props.genre}</strong></label>
                            </div>
                            <div>
                                <label>Metascore: <strong>{props.metascore}</strong></label>
                            </div>
                            <div>
                                <label>Description:</label>
                                <p><strong>{props.description}</strong></p>
                            </div>
                        </section>
                        
                        <section>
                            <span className="m-2 btn btn-dark">Favorite</span>
                            <span onClick={()=>props.deleteMovie(movies.id)} className="delete"><input type="button" className="m-2 btn btn-danger" value="Delete"/></span>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

const mapStateToProps = state =>{
    return{
        movie: state.movies
    }
}

const mapDispatchToProps = dispatch =>{
    deleteMovie: (movie)=> dispatch(deleteMovie(movie))
}
export default connect(mapStateToProps,mapDispatchToProps)(Movie);