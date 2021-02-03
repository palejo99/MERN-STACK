import { Router } from "express";
import * as videoControler from "./videos.controller";

const router = Router();

router.get("/videos", videoControler.getVideos);
router.get("/videos/:id", videoControler.getVideo);
router.post("/videos", videoControler.createVideos);
router.put("/video/:id", videoControler.updateVideos);
router.delete("/video/:id", videoControler.deleteVideos);

export default router;
