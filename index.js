//  getAllBooks();

const axios = require('axios');
const readlineSync = require('readline-sync')


const getAllBooks = async () => {
   try {
      const Booksdata = await axios.get('http://localhost:3000/books');
      // console.log(Booksdata);
      console.log({
         status:Booksdata.status,
         statusText:Booksdata.statusText,
         data:Booksdata.data
      });      
   } catch (err) {
      console.log(err.message);
   }
}


//getOneBook

const getOneBook = async (id) =>{
   try {
      const Booksdata = await axios.get(`http://localhost:3000/books/${id}`);
      console.log({
         status:Booksdata.status,
         statusText:Booksdata.statusText,
         data:Booksdata.data
      },
      "\n data is insert successfuly " ); 
   } catch (err) {
      console.log("book not exit");
   }
}

// insert data 

const insertBook = async (data) =>{
   try{
      if(Object.keys(data).length>0){
         const insertBook = await axios.post(`http://localhost:3000/books`,data);
         console.log({
            status:insertBook.status,
            statusText:insertBook.statusText,
            data:insertBook.data
         },
         "\n data is insert successfuly " ); 
      }
   }catch(err){
      console.log(err);
   }
}

//update data

   const updateBooks = async (id,data) =>{
      try{
            const updateBook = await axios.put(`http://localhost:3000/books/${id}`, data);
            console.log({
               status:updateBook.status,
               statusText:updateBook.statusText,
               data:updateBook.data
            },
            "\n data is update successfuly " ); 
      }catch(err){
         console.log(err.message);
      }
   }


//deleteBook

   const deletesBook = async (id) =>{
      try{
         if(id){
            const deleteBook = await axios.delete(`http://localhost:3000/books/${id}`);
            console.log({
               status:deleteBook.status,
               statusText:deleteBook.statusText
            },
            "\n data is deleted successfuly " ); 
         }
      }catch(err){
         console.log(err);
      }
   }

const LetStart = async() =>{


   // getAllBooks();
   // getOneBook(4);
   // insertBook({"title":"dell","author":"suraj"});
   // insertBook();
   // updateBook(3,{"title":"microsoft","author":"billgets"});
   // updateBook(2525,{})
   // deleteBook(3);
   
   
   
   while (true){
      let select = readlineSync.questionInt(`
                                        
                                         _____________________________________
                                        |                                     |
                                        |        Choose your option           |
                                        |         »»»»»»»»»»»»»»»»»           |
                                        |                                     |
                                        | Press 1 for show all book data      |
                                        | Press 2 for showing single Books    |
                                        | Press 3 for insert any Book         |
                                        | Press 4 for update any book data    |
                                        | Press 5 for Delete any Book         |
                                        | Press 6 for Exit                    |
                                        |_____________________________________|
                                                            `)
   
      if(select===1){
         await getAllBooks()
      }else if (select===2){
         let id = await readlineSync.question('press id of the book which you are to see  » ')
         await getOneBook(id)
      }else if (select===3){
         let author = await readlineSync.question ('Please enter the author name  »')
         let BookName = await readlineSync.question('Please enter the titleName name  »')
         await insertBook({author, BookName})
      }else if(select===4){
         let id = await readlineSync.question('press id of the book which you are wanted to update  »')
         let author = await readlineSync.question ('Please enter the author name  »')
         let BookName = await readlineSync.question('Please enter the titleName name  »')
         await updateBooks (id,{author, BookName})
      }else if(select==5){
         let id = await readlineSync.question('Press id of the book which you are wanted to delete  »')
         await deletesBook(id)
     }else{
         break
      }
   }
}

LetStart();
 



