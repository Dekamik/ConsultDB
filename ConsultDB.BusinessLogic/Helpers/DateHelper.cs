using System;
using System.Collections.Generic;
using System.Text;

namespace ConsultDB.BusinessLogic.Helpers
{
    public static class DateHelper
    {
        public static int GetAge(this DateTime dateOfBirth, DateTime date)
        {
            return (int)Math.Floor((date - dateOfBirth).TotalDays / 365.25D);
        }
    }
}
