import React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export const ViewProyect = ({title,descrip}) => {
  return (
    <figure className="flex flex-wrap rounded-2xl p-1 hover:bg-red-700/50 relative z-10 cursor-pointer">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhITEhMVFRIVGBgZFxUYFhgZFRUWGBYZGBUXGBUYHSggGBslGxUWIzEhJSkrLi8uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lICU1Ly81Ly03LS0yNTUrLS81Ly0tLS0tLS8tLS0tLSs1LTUtLS0tLS0tLS0tLS0tLS0tLf/AABEIAJEBXAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xAA/EAACAQICBgcECQMDBQAAAAAAAQIDEQQhBQYSMUFREyJhcYGRoQcyscEjQlJicrLR4fAUM4Ikc5I0Q3TC8f/EABoBAQACAwEAAAAAAAAAAAAAAAADBAECBQb/xAAuEQEAAgIABAMHBAMBAAAAAAAAAQIDEQQhMUEFEhMjMjNRcYGhYcHR4UKR8CL/2gAMAwEAAhEDEQA/AL0ADxT0QAAAAAAAAAAAAAAAAAAAB5qTUU5SaUVm23ZJc2wPQKhpjXujTbjRi6sl9bdDw4sqmN11xcv+4oLlGK+LzZcx8BmvG9a+qG2ekd3WgcgwGu+KhJOVR1I8YyS9JJZE7P2gVW/o6UHHk29p+Rm3AZonURtmM9NdXQgVzQWuFDENQlelV+zLc392XH0LGVb0tSdWjSSJiY3AADRkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY8TXjTi5zdox3v+cTm2smmKuKlZNxpL3Y8+1/z95fWXSnS1XCL+jpu34p7n5bl4kHKaTWavLsvbll8Ed7gODitYyW6z+HP4jPMz5Y6IHEpQVrdbm+C7uHxIjEXvn5FwxtOGzdZ7N+3Pm3xl2+RVcVQlJts6WlPbR23x8if0LU27xtnGzT9LZd5GYXRVSpLZhF3/AJx4Fx0BqpVhdySUnx3kWS0QmxUtb6KhjqlpvPjv3MvOo+uz2o4fEyunlCo+fCMn8GQOsGq9eMnJLaXNFWqUHB2mmuy1iLLix566ltW98Vt9n0eCjeznWrp4rDVZXqwXUk984Lg3xkvXzLyedy4rYrTWzpUvFo3AACNsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGhpzG9DQqTXvWtH8TyXlv8DfKd7QsbZUqSfOb/LH/wBifhsfqZa1aZbeWsyqksQopt7l8nu8XkR9LFN3lxfoYdL1nZRvvt/PLb80anT8Fu4956qHGlKf1u6K3L1fN/JeJLaE0TPF1LU1kvel9WN/izQ1Z0BUxlTYhlFe/NrKK+b5I7XobRFLC01TpRslvfGT4tvizW1u0N603zlG6M1co4eFoq8uMnvb+SMtWKJTEp2ImsV7LdOjXqpFf1g0LRrwcZRV+EuKfB3J2qaFdkMzpLEbcdq0quCxEWspwltQfOz3fzmd00JpKOJoU60d04p25PivB3Oce0PAro+l4wlF+Erxfqo+RJeyLSN6dag/qtTj3SykvNX/AMiDj8fnxRk7wjwT5Mk07S6GADiroAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcq1mxvTYuq0+rF7K7o9X45+J03SOI6OlUqfYhKXkrnFJVLKT4peLlK/7HV8Lp/6tb7KnF25RCO0hiPpPN/Jei9Sc1V1bqYqaSVorfLgu4gsHoypWrx2FtXaVu75ZHftUtHKjRjG1nx7zrXv2hUx07y3dD6Ko4SioxtGMc5SeV3xbZo4vXPCwvnJxX1lF7Pg+JKaR2HHrxjKKz627vtxKDrHrnOmnGjh/o1k5zWzB/hjbrGImOjeYnrKeevmCnkqtm+aa9TLHHQqLahJST4pnNYYzpVCpVw1JQqPeo7Mr3t4l31X0RCzlTuk+F8suRHedzpJSOW27VqqxG4nGQjnKSS5t2MetWI6CLbdl82c0q42nVn1o1Kl726zV7b7JL5mkUmze2SKrHr9pKlUwk+jnGV5U4tJ3t17r4MifZbjNjFwXCalD0TXwQ0nLCy0dX6OGzVjKFrybfvxUr3fJshdS8RsYmi+VSD9cyTLSJwWj6q8Xn1qzL6DAB5h1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEFrvV2cFW5yUY+ckjkGNqbo83fwWX6nV/aDL/Sd84fG/wAjkGJ999it6Z+rR3PDI9nP1UeL6wtHs6wjlWU+G015K/zO1YSOyrHMtSqfRqE7b1G9uFrq77bPPwOm0GWYncyz5dViGWdJSVmQul8DdWaT70T8DS0jUVjeY5NKzO1Qoasxk81FLuv6Fw0Xg1CKS3FenpdRkoRV5t27F2stWHjJJbTXea49bbZdxCl+0XR6qRSayun4Zp/EqFLVaKacU7803fPfxOi6zx27RWbs0lzyv8ivaFrtxzVnxXJ8TS9pi3JvSsTXmqetuh+jwVdxhZ9WUm/el9LFyk3xfMougJWrU/xR+J2LWpKWDxrfChPztl6nIdW4bWJpLnNfElpPs53+qtlj2tdPomlK8U+xHsx0F1Y9xkPLuqAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACpe0mX+mprnVX5ZM5HUd3J9/5kdZ9pcvoaH+58Is5HfKXd87ne8Nj2Tn8X70MK05iow6JVpqCysnbw2lnbxPoXUfSX9TgqFW95OCUvxRyfwPmzELM7H7FNI/6adJv3Ztrx3r+cy9krERuEGG0zbUy6VUr2TuVXTOmdpuFPN+iJ/Hw2otFHx2qtSrtunVlTqb002k+xorWmZ5LlYiOaU0Nodu85ZtkhiqFSPWjOd1w23bybsa+htE9RRqznCraN2/dlJtp2byfDzNnH6u9Xq183KyfZlxT3mYx8m02rvnP4VzSmlK0ppRi4yW57/IwaMxLjJ7W+Td+/ea+nMPPDO9OSqVlJKEW23d2zcb5rN5fdMOhcJNNurJzqPe3z49m9mlo11ImJnk86+6U6PCSpR/uYhqKX3ItSm+7cv8imahYfbxdLv/f5GPXHSv8AUYmTg706a2IPnb3peLb8Ei2eyPRV6k67WUVsr8T/AEXxJM9vS4ed/wDbVae0zx+n7OqxR+gHmnTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUr2oP6Kh+OX5DkkX1ZeHz/Y6v7VX9FR/FP8hyV+74noPDvgudxfvNavBylGK3s6H7LZbG2l9rf4IqOgdF1MRW2KcHOey9lLm+Lb3Jc3zOvamajLBw28RVUpvNwjlBPltPOXoXMvu6V8G/U32WzCU51MkvHgedlKbjdbSte3b/AD0NStpOUm40M+Dl9WK7+fYiGdOdKqptt/afMrzaF6Kz3WbEXtk7PzT70VPSu1d9WDXat/mWqjiYyjvI/Hxp8UmzNujNLeVXNEQ2HUls01KS2Y7MUtm/vNW4tZXKhrxrD0W1h6L+kkvpJL6kX9Vfea8l35WvSukI0F1LdJN7MI85Ps7Fn/8ATmusuhpxcqiTbbvLi2nnftJMVN85VOK4mK28neUNg4bUoxSu20kube473qZo1UKGyvtPPns9WT/5KXhY4nqjJf1dC9vfVr7lL6rfYpWb7Ez6Gw9FQjGC3RSS55c+053it53Wn3T8DWPLNmQAHHXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHPfa5PqYeK3vbsuLb2UjQ1Y9l9evGM8VJ4elvUEl00l2p5U+G+77EdToaBg68cTVW1UhHZpp7qd3eUrfbe6/BLtZIVqMpX6yXgei4StseGImObnZvLfJtC4LR+D0fScaMIwv70t852+1J5vu3FZxesPTVOig8lvSfDt7f1M2kIr+ofT1dulFOyivr8FLN3jv8iEo4WMcVGpHKNW//ADj+sbeTJJjzVmdnqenkimuvft9F40ckoJJWS4GppKWTNik9mxraQtc0nonjqqlfHVIN7MmvgaOI07Xzzj5fuT+IwUZIgtK4BxWSNayWhEaLpTxGIdSpJvo0km9ycnwtuyT3cyy4ugpTeV0v2XibOD0Q8PShFq85S2p24yfBPsVl4HhweWW97+f8+Z0K11Gnl+Ky+fJMwrWJ1bpdJJxvF3Ti1w7GuOZ0DRemdmMYVbtpW2rZ5favxIWeHcpLLcud+PMlcLg1dXT+LIs3C0zxq8JMHHZcPuymoY+Ddrtd6aM0a0X9ZeZHUcJe+Rt08L2em8qz4PinpM/hcr4xl71j8tlSXM/T8WGvdt/v+o6C38zIreDfK/4/tPXxj50/P9P0HiUrbz2criOFvgtq7qcPxNM9d0AAV04AAAAAAAAAAAAAAAAAAAAAAAAAAABlpYeUuFlzZvTHa86rG5a3vWkbtOmI2sBRu9p7l8TYp4OK35vt3eRnWR1cHh9qWi2T/X8qc8XGSJ8nT5v2TMFTr3ivd4v5Hqc7GtKs3lBZHRlHEKprToSFOKlTk9pvc3k/0KlKpN2hH309pLjtRu7p9quvE6VpvARnSltt7Vt63o57SqSpyu7NbrrJ2v27iOKx59M5bzGKbRzmFn0Xielpxle91dGTSEHsoidD4nYm4/Vl1l2S4r5+ZPVWpRMWjXJvhyResWju1sHg7q7NuloyMpxbWUc/FbvU90JWSSNjHaSo4Sk6laVuSXvSfCMY8SXBji07+SvxvEenSY3zlp6epLZXNOzXoiKhgM02rrkt5i0frPSxSjGa6KpKd1tvqT3Lqy3N9nbxLRToLZ3LJ2uXtbed1tCUsMk897Tt5okYR4tZdmWZ40o7To/eck/JfobSpJvLd2m0MGEpXubqgsrZP4r5HvD0rbv3Ec52XcG8Q9qBqYiq3UcVkoKLfNye5fMkEt7bz+PiQFPFONSvLPa6TZgubUYpdyX6gtyeq7vKTySW5GajO6NfFpRg2273SX3pN5mHB4i0mnudl57vh6nP8Sweri5dY5r/AIbxHpZdT0nkkgAeWenAAAAAAAAAAAAAAAAAAAAAAAAAAARMR3sA7vg3+f2/dx/Fv8Pv+z9jv8RIA6GT3pa8P8OGlihhwCPus9mppr+3I5tjdz7wDSfeLfDn7pGh7se9fEsVDcAZze8r+G/B+/8ACQwHvHPvaH/1D8PmAWeH+G5/inxY+n8q7H3X3HUNS/8ApKf4QCzDlY/eZtO/3KHeyUw/HuYBiE0dW9S3GBe8AbN20is0P7kv/IqfkAMSxZm017lL/c+TNGX1v8fzMA0sV6psAHiXtgAAAAAAAAAAAAB//9k="
        alt=""
        className="w-full sm:w-[160px] object-cover h-[100px] rounded-xl"
      />
      <span className="p-2 w-[230px]">
        <h3 className="text-lg text-green-500 font-lilita font-bold tracking-widest">
          {title}
        </h3>
        <p className="text-white font-Neue tracking-wide">
          {descrip}
        </p>
        <Stack spacing={1}>
          <Rating name="half-rating" defaultValue={3.0} precision={0.5} />
        </Stack>
      </span>
    </figure>
  );
};