import { IoCheckmarkCircleSharp } from "react-icons/io5";
function Comment() {
  return (
    <div className="public-comment">
      <img
        src="https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg"
        className="comment-image"
      ></img>
      <div className="comment-info">
        <div className="comment-info-top">
          <span>Catboard</span>
          <IoCheckmarkCircleSharp />
          <span className="comment-timeline">12 minutes ago</span>
        </div>
        <div className="comment-info-bottom">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            tristique accumsan mauris at accumsan. Etiam aliquam ac nunc id
            imperdiet. Pellentesque nec eleifend erat, ut lobortis dolor. Sed
            neque urna, mattis eget rhoncus gravida, pellentesque in massa.
            Proin eleifend non lacus nec sodales. Aenean egestas urna nunc, in
            facilisis elit convallis at. Integer maximus tortor semper mi
            eleifend, sed fermentum dui suscipit. Duis in nunc velit. Sed enim
            elit, vehicula in viverra vel, consequat sed erat. Etiam consequat
            est orci, sed fermentum tortor dapibus eget. Integer in est sed
            lorem placerat facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
