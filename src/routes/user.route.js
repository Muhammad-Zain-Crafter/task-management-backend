import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {upload} from "../middlewares/multer.middleware.js";
import {changeAvatar, changePassword, getCurrentUser, loginUser, logoutUser, resgisterUser, updateAccountDetails} from "../controllers/user.controller.js";

const router = Router()

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    resgisterUser
)

router.route("/login").post(
    loginUser
)
router.route("/logout").post(
    verifyJWT, logoutUser
)
router.route("/get-profile").get(
    verifyJWT, getCurrentUser
)
router.route("/edit-profile").patch(
    verifyJWT, updateAccountDetails
)
router.route("/change-password").post(
    verifyJWT, changePassword
)
router.route("/change-avatar").patch(
    verifyJWT, upload.single("avatar"), changeAvatar
)

export default router;