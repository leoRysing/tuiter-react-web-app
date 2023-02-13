import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
    <div class="d-flex flex-row justify-content-start align-items-center mb-3">
        <!-- search field and cog -->
        <form class="flex-fill">
          <div class="wd-form-floating">
            <i class="fa fa-search wd-search-icon" aria-hidden="true"></i>
            <input type="text" id="search" class="form-control rounded-pill d-inline-block wd-search" placeholder="Search Tuitter">
          </div>
        </form>
        <i class="fa fa-gear fa-xl wd-setting-icon"></i>
    </div>
    <ul class="nav mb-2 nav-tabs">
        <li class="nav-item">
          <a class="nav-link active">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link">Sports</a>
        </li>
        <li class="nav-item d-none d-md-inline">
          <a class="nav-link">Entertainment</a>
        </li>
    </ul>
    <img src="../../images/starship.jpeg" class="w-100">
    <h3 class="wd-display fw-bold">SpaceX's Starship</h3>
    ${PostSummaryList()}

  `);
}

export default ExploreComponent;