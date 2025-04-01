module.exports = (req, res) => {
    try {
      // Perform the redirect
      res.redirect(301, 'https://maps.app.goo.gl/d1fskNGdGPdoixMa7?g_st=ac');
    } catch (error) {
      console.error("Error during redirect:", error);
      res.status(500).send("Internal Server Error");
    }
};