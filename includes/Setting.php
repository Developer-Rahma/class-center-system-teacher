<main class="SettingBigContainer">
    <div class="SettingHeader">
        <h2> Setting</h2>
        <p>
            Manage your account settings and set e-mail preferences.
        </p>
    </div>
    <hr>
    <div class="SettingContainer">
        <div class="SettingSideBar">
            <a href="#profile" onclick="showSection('profile')">Profile</a>
            <a href="#account" onclick="showSection('account')">Account</a>
            <a href="#subscription" onclick="showSection('subscription')">Subscription</a>
            <a href="#Activity" onclick="showSection('Activity')">Activity</a>
        </div>
        <div class="SettingRight">
            <div id="profile" class="section">

                <div class="FormContainer">

                    <div class="FormContent">
                        <form class="ProfileForm">
                            <div class="InputGroup">
                                <label>Full name</label>
                                <div class="FirstLastInputGroup">
                                    <input type="text" placeholder="First name">
                                    <input type="text" placeholder="Last name">
                                </div>
                            </div>
                            <div class="InputGroup">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your Email">
                            </div>
                            <div class="InputGroup">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Your Phone number..">
                            </div>
                            <div class="InputGroup">
                                <label>Major</label>
                                <input type="text" placeholder="Your major">
                            </div>
                            <div class="InputGroup">
                                <label>Years of Experience</label>
                                <input type="number" placeholder="Your years of experience">
                            </div>
                            <div class="InputContainer">
                                <div class="InputGroup">
                                    <label>Age</label>
                                    <input type="number" placeholder="Your age">
                                </div>
                                <div class="InputGroup">
                                    <label>Birthday</label>
                                    <input type="date">
                                </div>

                            </div>

                            <div class="FormButtons">
                                <button type="submit" class="BrandBtn">Save Changes</button>
                                <button type="button" class="cancel-btn">Cancel</button>
                            </div>
                        </form>
                        <!-- <div class="upload-section">
                        <img src="http://localhost:3000/img/Imgs/user.png" alt="Avatar">
                        <div class="InputGroup FormField">



                                <label for="BirthCertificate" class="InputWithIcon Upload">
                                    <div class="FileNames"><span>Upload Your Image</span></div>
                                    <input id="BirthCertificate" name="ReqFileImg" type="file" placeholder="Upload Image">

                                    <div class="Icon UploadInput">
                                        <img src="img/Icons/upload.svg" alt="">
                                    </div>

                                </label>

                                <div class="FieldError">

                                </div>
                            </div>

                            <p>Image size should be under 1MB and image ratio needs to be 1:1</p>
                        </div> -->
                    </div>
                </div>
            </div>
            <div id="account" class="section">
                <div class="FormContainer">

                    <div class="FormContent">
                        <form class="ProfileForm">
                            <div class="InputGroup">
                                <label>Email</label>
                                <input type="email" placeholder="Enter your Email">
                            </div>
                            <div class="InputGroup">
                                <label>Password</label>
                                <input type="password" placeholder="Password..">
                            </div>
                            <div class="InputGroup">
                                <label>Confirm Password</label>
                                <input type="text" placeholder="Confirm Password">
                            </div>

                            <div class="FormButtons">
                                <button type="submit" class="BrandBtn">Save Changes</button>
                                <button type="button" class="cancel-btn">Cancel</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div id="subscription" class="section">

                <div class="subscriptionContainer">
                    <h1>
                        Subscription details
                    </h1>
                    <div class="subscriptionContainer">
                        <div class="subscriptionHeading">
                            <div class="Plan">
                                <h3>Current plan</h3>
                                <p>
                                    Plus 10 USD/month (VAT may apply)
                                </p>
                            </div>
                            <div class="PlanBtn">
                                <button>
                                    Change Plan
                                </button>
                            </div>

                        </div>
                        <div class="NextSub">
                            <p>
                                Next payment: Oct 3rd, 2024
                            </p>
                            <div class="PaymentBtn">
                                <button>
                                    Cancel subscription
                                </button>
                            </div>
                        </div>
                        <div class="PaymentDetails">
                            <h3>
                                Payment Details
                            </h3>
                            <div class="PaymentRow">
                                <div class="ImgContent">
                                    <svg width="47" height="16" viewBox="0 0 47 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.6319 0.794478L16.2854 15.2153H20.0396L22.3864 0.794478H18.6319ZM13.1267 0.794478L9.54729 10.713L9.12389 8.57718L9.03089 8.09918C8.59769 7.16558 7.59439 5.39118 5.69989 3.87688C5.13979 3.42928 4.57519 3.04728 4.02939 2.72098L7.28249 15.2153H11.1941L17.1674 0.794478H13.1267ZM27.7788 4.79798C27.7788 3.16758 31.4351 3.37708 33.0417 4.26238L33.5774 1.16518C33.5774 1.16518 31.924 0.536377 30.2006 0.536377C28.3374 0.536377 23.9131 1.35118 23.9131 5.31028C23.9131 9.03628 29.1059 9.08258 29.1059 11.0388C29.1059 12.995 24.4485 12.6454 22.9115 11.4114L22.3529 14.6487C22.3529 14.6487 24.0292 15.4635 26.5911 15.4635C29.1527 15.4635 33.0183 14.1364 33.0183 10.5265C33.0183 6.77718 27.7788 6.42798 27.7788 4.79798ZM43.0988 0.794478H40.0803C38.6865 0.794478 38.3471 1.86918 38.3471 1.86918L32.7483 15.2153H36.6614L37.4442 13.0734H42.217L42.6573 15.2153H46.1045L43.0988 0.794478ZM38.5261 10.1141L40.4989 4.71748L41.6087 10.1141H38.5261Z" fill="#005BAC" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.9123 2.15218C7.9123 2.15218 7.7569 0.850677 6.0979 0.850677H0.0705999L0 1.09528C0 1.09528 2.8972 1.68588 5.6767 3.89858C8.3329 6.01338 9.1994 8.64958 9.1994 8.64958L7.9123 2.15218Z" fill="#F6AC1D" />
                                    </svg>
                                    <div class="ContentDesc">
                                        <h3>
                                            Credit card
                                        </h3>
                                        <p>
                                            ********3456
                                        </p>
                                    </div>
                                </div>
                                <div class="UpdateBtn">
                                    <button>
                                        Update payment info
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>
            </div>
            <div id="Activity" class="section SettingActivitySection">
                <div class="tableContainer">
                    <div class="filterBar">
                        <div class="Search">
                            <input type="text" placeholder="Search for Classes">
                            <div class="SearchIcon">
                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.74362 12.5505C9.98827 12.5505 12.6186 9.92022 12.6186 6.67556C12.6186 3.43091 9.98827 0.800598 6.74362 0.800598C3.49896 0.800598 0.868652 3.43091 0.868652 6.67556C0.868652 9.92022 3.49896 12.5505 6.74362 12.5505Z" fill="#D7E0FF" stroke="#4C6BB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M13.3685 13.3006L10.9019 10.834" stroke="#4C6BB6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                            </div>
                        </div>
                        <button>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.97413 15.6669C2.13569 17.1067 3.28475 18.2551 4.72398 18.4219C6.60599 18.6402 8.55493 18.8662 10.5513 18.8662C12.5476 18.8662 14.4965 18.6402 16.3786 18.422C17.8178 18.2551 18.9668 17.1067 19.1284 15.6669C19.3386 13.7934 19.5513 11.8533 19.5513 9.86621C19.5513 7.87907 19.3386 5.93906 19.1284 4.06553C18.9668 2.6257 17.8178 1.47734 16.3786 1.31047C14.4965 1.09227 12.5476 0.866211 10.5513 0.866211C8.55493 0.866211 6.60599 1.09227 4.72398 1.31047C3.28475 1.47734 2.13569 2.6257 1.97413 4.06553C1.7639 5.93906 1.55127 7.87907 1.55127 9.86621C1.55127 11.8533 1.7639 13.7934 1.97413 15.6669Z" fill="#DDDDDD" />
                                <path d="M1.97413 15.6669C2.13569 17.1067 3.28475 18.2551 4.72398 18.4219C6.60599 18.6402 8.55493 18.8662 10.5513 18.8662C12.5476 18.8662 14.4965 18.6402 16.3786 18.422C17.8178 18.2551 18.9668 17.1067 19.1284 15.6669C19.3386 13.7934 19.5513 11.8533 19.5513 9.86621C19.5513 7.87907 19.3386 5.93906 19.1284 4.06553C18.9668 2.6257 17.8178 1.47734 16.3786 1.31047C14.4965 1.09227 12.5476 0.866211 10.5513 0.866211C8.55493 0.866211 6.60599 1.09227 4.72398 1.31047C3.28475 1.47734 2.13569 2.6257 1.97413 4.06553C1.7639 5.93906 1.55127 7.87907 1.55127 9.86621C1.55127 11.8533 1.7639 13.7934 1.97413 15.6669Z" stroke="#151A20" stroke-width="1.5" />
                                <path d="M10.5513 6.26624L10.5513 13.4662" stroke="#151A20" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.1514 9.86621L6.95137 9.86621" stroke="#151A20" stroke-width="1.5" stroke-linecap="round" />
                            </svg>

                            Status
                        </button>
                        <button>
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.97413 15.6669C2.13569 17.1067 3.28475 18.2551 4.72398 18.4219C6.60599 18.6402 8.55493 18.8662 10.5513 18.8662C12.5476 18.8662 14.4965 18.6402 16.3786 18.422C17.8178 18.2551 18.9668 17.1067 19.1284 15.6669C19.3386 13.7934 19.5513 11.8533 19.5513 9.86621C19.5513 7.87907 19.3386 5.93906 19.1284 4.06553C18.9668 2.6257 17.8178 1.47734 16.3786 1.31047C14.4965 1.09227 12.5476 0.866211 10.5513 0.866211C8.55493 0.866211 6.60599 1.09227 4.72398 1.31047C3.28475 1.47734 2.13569 2.6257 1.97413 4.06553C1.7639 5.93906 1.55127 7.87907 1.55127 9.86621C1.55127 11.8533 1.7639 13.7934 1.97413 15.6669Z" fill="#DDDDDD" />
                                <path d="M1.97413 15.6669C2.13569 17.1067 3.28475 18.2551 4.72398 18.4219C6.60599 18.6402 8.55493 18.8662 10.5513 18.8662C12.5476 18.8662 14.4965 18.6402 16.3786 18.422C17.8178 18.2551 18.9668 17.1067 19.1284 15.6669C19.3386 13.7934 19.5513 11.8533 19.5513 9.86621C19.5513 7.87907 19.3386 5.93906 19.1284 4.06553C18.9668 2.6257 17.8178 1.47734 16.3786 1.31047C14.4965 1.09227 12.5476 0.866211 10.5513 0.866211C8.55493 0.866211 6.60599 1.09227 4.72398 1.31047C3.28475 1.47734 2.13569 2.6257 1.97413 4.06553C1.7639 5.93906 1.55127 7.87907 1.55127 9.86621C1.55127 11.8533 1.7639 13.7934 1.97413 15.6669Z" stroke="#151A20" stroke-width="1.5" />
                                <path d="M10.5513 6.26624L10.5513 13.4662" stroke="#151A20" stroke-width="1.5" stroke-linecap="round" />
                                <path d="M14.1514 9.86621L6.95137 9.86621" stroke="#151A20" stroke-width="1.5" stroke-linecap="round" />
                            </svg>
                            Date
                        </button>
                        <div class="sortOptions">
                            <label for="sortSelect">Sort By</label>
                            <select id="sortSelect">
                                <option>Recently Created</option>
                                <option>Oldest First</option>
                                <option>Alphabetical</option>
                            </select>
                        </div>
                    </div>

                    <table class="activityTable">
                        <thead>
                            <tr>
                                <th>Tag</th>
                                <th>Activity Name</th>
                                <th>Timestamp</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>
                            <tr>
                                <td><span class="tag">Room</span></td>
                                <td>New Game Created: Math Adventure</td>
                                <td>12 FEB 2024, 9:04 PM</td>
                                <td>Teacher Essam Ahmed created Biology 6.</td>
                            </tr>

                        </tbody>
                    </table>

                    <div class="PaginationContainer">
                        <div class="Pagination Narrow">
                            <a href="#">&laquo;</a>
                            <a href="#">1</a>
                            <a href="#" class="active">2</a>
                            <a href="#">3</a>
                            <a href="#">4</a>
                            <a href="#">5</a>
                            <a href="#">6</a>
                            <a href="#">&raquo;</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</main>