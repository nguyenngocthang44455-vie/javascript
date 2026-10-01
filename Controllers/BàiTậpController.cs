using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace javascript.Controllers
{
    public class BàiTậpController : Controller
    {
        // GET: BàiTập
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult bai1()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult bai2()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult bai3()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
        public ActionResult bai4()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }
    }
}