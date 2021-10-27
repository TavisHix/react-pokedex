      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon}/>
            <Typography  variant="h6">
              React Pokédex
            </Typography>
           </Toolbar>
         </AppBar>
         <main>
           <div className={classes.container}>
             <Container maxWidth="sm">
               <Typography variant="h3" align="center" color="textPrimary" gutterBottom>
                React Pokédex
               </Typography>
               <Typography variant="h5" align="center" color="textSecondary" paragraph>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
               </Typography>
               <div className={classes.buttons}>
                  <Grid container spacing= {2} justify="center">
                    <Grid item>
                      <Button variant="contained" color="primary">
                        See my photos
                      </Button> 
                    </Grid>
                    <Grid item>
                      <Button variant="outlined" color="primary">
                        Secondary action
                      </Button> 
                    </Grid>
                  </Grid>
               </div>
             </Container>
           </div>
           <Container className={classes.cardGrid} maxWidth="md">
             <Grid container spacing={4}>
               {cards.map(() => (
                 <Grid item xs={12} sm={6} md={4}>
                 <Card className={classes.card}>
                   <CardMedia 
                     className={classes.cardMedia}
                     image="https://source.unsplash.com/random"
                     title="Image Title"
                   />
                   <CardContent className={classes.cardContent}>
                     <Typography gutterBottom variant="h5">
                       Heading
                     </Typography>
                     <Typography >
                       This is goated. but it aint really that great but is it really tho? nah its not
                     </Typography>
                   </CardContent>
                   <CardActions>
                     <Button size="small" color="primary">View</Button>
                     <Button size="small" color="primary">Edit</Button>
                   </CardActions>
                 </Card>
               </Grid>
               ))}
             </Grid>
           </Container>
         </main>
      </React.Fragment>











Normal Type: A8A77A
Fire Type:  EE8130
Water Type:  6390F0
Electric Type:  F7D02C
Grass Type:  7AC74C
Ice Type:  96D9D6
Fighting Type:  C22E28
Poison Type:  A33EA1
Ground Type:  E2BF65
Flying Type:  A98FF3
Psychic Type:  F95587
Bug Type:  A6B91A
Rock Type:  B6A136
Ghost Type:  735797
Dragon Type:  6F35FC
Dark Type:  705746
Steel Type:  B7B7CE
Fairy Type:  D685AD