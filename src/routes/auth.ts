import { Router } from "express";

const router = Router();
router.get('/login', function(req, res, next) {
    res.render('login');
  });

  module.exports = router;
