import React from "react";
import "./cards.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const Cards = () => {
  return (
    <div className="wrapper">
      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://ktmguide.com/wp-content/uploads/2019/09/b11-scaled.jpg"
              alt="ktm"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Kathmandu
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Nepal’s capital is surrounded by a valley full of historic
                sites, ancient temples, shrines, and fascinating villages.
                Mingle with locals amid Durbar Square’s monuments, or join
                mountain trekkers in the bustling Thamel District.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image=" https://myrepublica.nagariknetwork.com/uploads/media/1627287639_HotelLakeside-1200x560_20210726162815.jpg"
              alt="pkr"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Pokhara
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Pokhara is a city on Phewa Lake, in central Nepal. It’s known as
                a gateway to the Annapurna Circuit, a popular trail in the
                Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an
                island in the lake.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://cdn.kimkim.com/files/a/content_articles/featured_photos/4a8eeecd5c9854938f39e98a5144100052e91af8/big-913b6140c12e08ffc98f736f2c99bb9b.jpg"
              alt="litpur"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lalitpur
              </Typography>
              <Typography variant="body2" color="text.secondary">
                It is best known for its rich cultural heritage, particularly
                its tradition of arts and crafts. It is city renowned for its
                festival and feast, fine ancient art, and the making of metallic
                and stone carved statues.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://img.freepik.com/free-photo/downtown-bhaktapur-where-tourists-residents-abound-all-hour_480416-417.jpg?size=626&ext=jpg"
              alt="bkt"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bhaktapur
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bhaktapur, known locally as Khwopa, is a city in the east corner
                of the Kathmandu Valley in Nepal located about 13 kilometres
                from the capital city, Kathmandu. It is located in and serves as
                the headquarters of Bhaktapur District.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://media.tacdn.com/media/attractions-splice-spp-674x446/06/ef/f0/8b.jpg"
              alt="ghandruk"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ghandruk
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ghandruk is a common place for treks in the Annapurna range of
                Nepal (Annapurna Base camp and Annapurna Circuit treks). The
                peaks of Mt Annapurna, Mt Machapuchare, Gangapurna and Mt
                Hiunchuli can be seen from the village.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://www.allnepal.com/wp-content/uploads/2018/09/Rara-Lake-1140x530.jpg"
              alt="rara"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Rara
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Rara Lake is the biggest fresh water lake in the Nepalese
                Himalayas. It is the main feature of Rara National Park, located
                in Jumla and Mugu Districts.Rara has the potential of becoming
                the next major place for tourists to visit.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://himalecotreks.com/wp-content/uploads/2020/06/shey-phoksundo-lake-trek-2021.jpg"
              alt="shey"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Shey Phoksundo
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Phoksundo Lake is an alpine fresh water oligotrophic lake.There
                are more than 20 stupas in the southern belt and one gompa in
                the eastern side of the lake, where annual prayers and worship
                are carried out.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>

      <div className="columns">
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://static01.nyt.com/images/2021/06/27/world/27virus-nepal-everest1/27virus-nepal-everest1-mediumSquareAt3X.jpg"
              alt="mount"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Mount Everest
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Mount Everest attracts many climbers, including highly
                experienced mountaineers. There are two main climbing routes,
                one approaching the summit from the southeast in Nepal and the
                other from the north in Tibet.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
};

export default Cards;
