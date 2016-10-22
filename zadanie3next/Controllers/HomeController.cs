using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using zadanie3next.Models;

namespace zadanie3next.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        ApplicationDbContext dbc = new ApplicationDbContext();

        public ActionResult Index()
        {
            return View(dbc.Notes.ToList());
        }
        [HttpGet]
        public ActionResult addNote() {
            return View();
        }

        public string getCurrentUser() {
            var user = User.Identity.GetUserName();
            return user;
        }

        public JsonResult GetNotes() {
            //   var notes = dbc.Notes.Select(t => new { t.Text, t.Color }
            //   ).ToList();
            var notes = dbc.Notes.ToList();
            return Json(notes, JsonRequestBehavior.AllowGet);
        }

        public void UpdateNoteTest(Note id) {
            if (id != null)
            {
                Note note = dbc.Notes.Find(id.Id);
                note.Text = id.Text;
                dbc.SaveChanges();
            }
        }

        public JsonResult GetNoteById(int? id) {
            var note = dbc.Notes.Find(id);
            return Json(note, JsonRequestBehavior.AllowGet);
        }

        public void InsertNote(Note note)
        {
         
            if (note != null)
            {
                note.UserLogin = User.Identity.GetUserName();
                    dbc.Notes.Add(note);
                    dbc.SaveChanges(); 
            }
        }

        public void UpdateNotePos(Note id)
        {
            if (id != null)
            {
                Note note = dbc.Notes.Find(id.Id);
                note.X = id.X;
                note.Y = id.Y;
                dbc.SaveChanges();
            }
        }

        public string UpdateNote(Note note)
        {
            if (note != null)
            {
                    var Note_ = dbc.Entry(note);
                    Note NoteObj = dbc.Notes.Where(x => x.Id == note.Id).FirstOrDefault();
                    NoteObj.Text = note.Text;
                    NoteObj.Color = note.Color;
                    dbc.SaveChanges();
                   return "Employee Updated Successfully";
                }
            else
            {
                return "Employee Not Updated! Try Again";
            }
        }
        public void ChangeColor(int? id, int type) {
            string color="";
            if (type == 1) color = "red";
            if (type == 2) color = "yellow";
            if (type == 3) color = "pink";
            Note note = dbc.Notes.Find(id);
            note.Color = color;
         //   note.X = xpos;
         //   note.Y = ypos;
            dbc.SaveChanges();

        }

        //public void ChangeImageType(int? id, int type) {
        //    string imgtype = "";
        //    if (type == 1) imgtype = "sepia";
        //    if (type == 2) imgtype = "invert";
        //    if (type == 3) imgtype = "brightness";
        //    Note note = dbc.Notes.Find(id);
        //    note.ImageType = imgtype;
        //    //   note.X = xpos;
        //    //   note.Y = ypos;
        //    dbc.SaveChanges();
        //}

        public JsonResult DeleteNote(int? id)
        {
  

            if (id != null)
            {
                Note note = dbc.Notes.Find(id);
                if (note != null)
                {
                    dbc.Notes.Remove(note);
                    dbc.SaveChanges();

                }
            }
            return GetNotes();
           
        }

        [HttpPost]
        public ActionResult AddNote(Note note) {
            note.Text = "Default Value";
            dbc.Entry(note).State = System.Data.Entity.EntityState.Added;
            dbc.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}