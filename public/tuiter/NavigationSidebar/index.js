const NavigationSidebar = () => {
  return(`
   <div class="list-group">
      <a class="list-group-item list-group-item-active" href="#">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-home wd-icons"></i>
          <span class="d-none d-xl-block">Home</span>
        </div>
      </a>

      <li class="list-group-item active">
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-hashtag wd-icons"></i>
            <span class="d-none d-xl-block">Explore</span>
        </div>
      </li>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-bell wd-icons"></i>
            <span class="d-none d-xl-block">Notifications</span>
        </div>
      </a>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-envelope wd-icons"></i>
          <span class="d-none d-xl-block">Messages</span>
        </div>
      </a>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-bookmark wd-icons"></i>
          <span class="d-none d-xl-block">Bookmarks</span>
        </div>
      </a>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-list wd-icons"></i>
          <span class="d-none d-xl-block">Lists</span>
        </div>
      </a>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-user wd-icons"></i>
          <span class="d-none d-xl-block">Profile</span>
        </div>
      </a>

      <a class="list-group-item list-group-item-active" href="#" >
        <div class="d-flex flex-row justify-content-start align-items-center">
          <i class="fa fa-ellipsis-h wd-icons"></i>
          <span class="d-none d-xl-block">More</span>
        </div>
      </a>
   </div>
   <div class="d-grid">
    <button type="button" class="btn btn-primary rounded-pill wd-button-top">
      Tuit
    </button>
   </div>
 `);
}
export default NavigationSidebar;