using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace zadanie3next.Models
{
    public class Note
    {
        public virtual int Id { get; set; }
        public virtual string Color { get; set; }
        public virtual string Text { get; set; }
        public virtual int X { get; set; }
        public virtual int Y { get; set; }
        public virtual string UserLogin { get; set; }

    }
}