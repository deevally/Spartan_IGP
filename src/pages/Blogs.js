import React from 'react'
import Nav from "../components/Nav";
import photo from '../Images/undraw_todo_list.png' ;
import Button from '../components/Button';
import './Blogs.css';


const Blog = () => {
    return (
    <div>

<Nav Jobs="Jobs" SignUp="SignUp" LogIn="LogIn" />
{/* <p>Blog</p> */}
<div className="container">
		<div className="row fullPage">
				<div className=" col-md-12">
					<h2 className="news-and-articles">NEWS AND ARTICLES</h2>
                    <div className="icons-div">
		<i className="fab fa-facebook-f icon-1 icon"></i>
		<i className="fab fa-twitter icon-2 icon"></i>
		<i className="fab fa-whatsapp icon-3 icon"></i>
		<i className="fab fa-skype icon-4 icon"></i>
		<i className="fab fa-snapchat-ghost icon-5 icon"></i>
		<i className="fab fa-google-plus-g icon-6 icon"></i>
	</div>
					<div id="data">
					</div>

        <div className="single-post">
            <div className="title" id="main-title">
                <div className="blog-content">
                    <h4>SUNT AUT FACERE REPELLAT PROVIDENT OCCAECATI EXCEPTURI OPTIO REPREHENDERIT
                    </h4>
                            <p>dolor sit amet consectetur adipisicing elit. Ipsa natus teneturLorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa natus tenetur
                            amet laudantium harum cupiditate, enim aut optio ex est repellat excepturi magni eius cum sint nobis totam
                           deserunt veniam. consectetur adipisicing elit. Quisquam a in mollitia expedita beatae eligendi ullam,
                           deleniti iste nisi maiores ut, sed saepe magnam quos quaerat, labore nemo odio. Voluptates
                           amet laudantium harum cupiditate, enim a
                           amet laudanti
                    </p>
                    <p>by <span className="lorem">Lorem ipsum</span></p>
                    <p>October 9, 2019</p>
                    <Button Children ="View More"  btnType="btn-primary" />
                </div>
                    <div id="image">
                        	<img src={photo} alt='cardphoto' className="indexImage" />
                    </div>
            </div>
        </div>
                </div>
        </div>
            </div>
   
        </div>
        
    )
}

export default Blog;
