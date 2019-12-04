const app = require("./app");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require("passport");
require('./passport')(passport)
const jwt = require("jsonwebtoken");
//const config = require("./config");
const cookieParser = require('cookie-parser')

const multer = require('multer');
const path = require('path');
const fs = require('fs');

//Storing documents/Images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    }
    , filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage });


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const addCommentOnTweet = require('./routes/addCommentOnTweet');
const addMembersToList = require("./routes/addMembersToList");
const addNewList = require('./routes/addNewList');
const addNewTweet = require('./routes/addNewTweet');
const bookmarkATweet = require("./routes/bookmarkATweet");
const deActivateAccount = require("./routes/deActivateAccount");
const deleteList = require("./routes/deleteList");
const deleteMemberFromList = require("./routes/deleteMemberFromList");
const deleteRetweet = require("./routes/deleteRetweet");
const deleteTweet = require("./routes/deleteTweet");
const editList = require("./routes/editList");
const findUsers = require("./routes/findUsers");
const followUser = require('./routes/followUser');
const getAllTweetsFollowing = require("./routes/getAllTweetsFollowing");
const getConversations = require("./routes/getConversations");
const getDailyTweets = require("./routes/getDailyTweets");
const getHourlyTweets = require("./routes/getHourlyTweets");
const getListsByUserName = require("./routes/getListsByUserName");
const getMessages = require("./routes/getMessages");
const getMonthlyTweets = require("./routes/getMonthlyTweets");
const getProfile = require('./routes/getProfile');
const getProfileViews = require("./routes/getProfileViews");
const getTop5RetweetedTweets = require("./routes/getTop5RetweetedTweets");
const getTop10LikedTweets = require("./routes/getTop10LikedTweets")
const getTop10ViewedTweets = require("./routes/getTop10ViewedTweets");
const getTweet = require("./routes/getTweet");
const getTweetsOfMembersInList = require("./routes/getTweetsOfMembersInList");
const getUserBookmarkedTweetIds = require("./routes/getUserBookmarkedTweetIds");
const getUserBookmarkedTweets = require("./routes/getUserBookmarkedTweets");
const getUserLikedTweetIds = require('./routes/getUserLikedTweetIds');
const getUserLikedTweets = require('./routes/getUserLikedTweets');
const getUserMemberOfLists = require("./routes/getUserMemberOfLists");
const getUserRetweetIds = require('./routes/getUserRetweetIds');
const getUserSubscribedLists = require("./routes/getUserSubscribedLists");
const getUserTweets = require('./routes/getUserTweets');
const likeATweet = require('./routes/likeATweet');
const login = require('./routes/login');
const retweetWithComment = require("./routes/retweetWithComment");
const retweetWithoutComment = require("./routes/retweetWithoutComment");
const searchByHashTag = require("./routes/searchByHashTag");
const setMessage = require('./routes/setMessage');
const signUp = require('./routes/signUp');
const subscribeToList = require("./routes/subscribeToList");
const unfollowUser = require('./routes/unfollowUser');
const updateProfile = require("./routes/updateProfile");



app.use('/', addNewTweet);
app.use('/', followUser);
app.use('/', getProfile);
app.use('/', getUserTweets);
app.use('/', login);
app.use('/', signUp);
app.use('/', unfollowUser);
app.use('/', addCommentOnTweet);
app.use('/', likeATweet);
app.use('/', getUserLikedTweets);
app.use('/', getUserBookmarkedTweets);
app.use('/', bookmarkATweet);
app.use('/', findUsers);
app.use('/', deleteList);
app.use('/', addMembersToList);
app.use('/', deleteMemberFromList);
app.use('/', editList);
app.use('/', subscribeToList);
app.use('/', getListsByUserName);
app.use('/', getUserMemberOfLists);
app.use('/', getUserSubscribedLists);
app.use('/', searchByHashTag);
app.use('/', updateProfile);
app.use('/', deleteRetweet);
app.use('/', deleteTweet);
app.use('/', getProfileViews);
app.use('/', getTop5RetweetedTweets);
app.use('/', getTop10LikedTweets);
app.use('/', getTop10ViewedTweets);
app.use('/', getTweet);
app.use('/', getAllTweetsFollowing);
app.use('/', getConversations);
app.use('/', getMessages);
app.use('/', getTweetsOfMembersInList);
app.use('/', retweetWithComment);
app.use('/', retweetWithoutComment);
app.use('/', getUserBookmarkedTweetIds);
app.use('/', deActivateAccount);
app.use('/', getDailyTweets);
app.use('/', getHourlyTweets);
app.use('/', getMonthlyTweets);
app.use('/', addNewList);
app.use('/', getUserLikedTweetIds);
app.use('/', getUserRetweetIds);
app.use('/', setMessage);


//uplaod-file
app.post('/upload-file', upload.array('photos', 5), (req, res) => {
    console.log('req.body', req.body);
    res.end();
});

//download-file
app.get('/download-file/:user_image', (req, res) => {
    var image = path.join(__dirname + '/uploads', req.params.user_image);
    console.log("image", image)
    if (fs.existsSync(image)) {
        res.sendFile(image)
    }
    else {
        res.end("image not found")
    }
});

app.listen(3001, () => {
    console.log('server is running on port 3001');
});