import math

def sec_to_date(x):
    sec_in_a_day = 86400
    sec_in_a_hour = 3600
    sec_in_minute = 60

    day = math.floor(x / sec_in_a_day)
    hour = math.floor((x - day * sec_in_a_day ) / sec_in_a_hour)
    minute = math.floor((x - day * sec_in_a_day - hour * sec_in_a_hour) / sec_in_minute)
    second = math.floor((x - day * sec_in_a_day - hour * sec_in_a_hour - minute * sec_in_minute ))

    print(str(x) + " = " + str(day) + "day " + str(hour) + "hr " + str(minute) + "min " + str(second) + "s" )

sec_to_date(13500.0)