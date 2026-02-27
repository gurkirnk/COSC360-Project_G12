import './Footer.css';

export default function Footer(){
    return(
        <footer>
            <h6><strong>Explore</strong></h6>
            <p><a href="/browse?genre=horror">Horror</a></p>
            <p><a href="/browse?genre=action">Action</a></p>
            <p><a href="/browse?genre=romance">Romance</a></p>
            <p><a href="/browse?genre=scifi">Science Fiction</a></p>
        </footer>
    );
}