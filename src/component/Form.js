import { useForm } from "react-hook-form";

export default function App() {
  const url = "https://jsonplaceholder.typicode.com/users"
  const { register, handleSubmit,formState:{errors} } = useForm();
  const onSubmit = data =>  fetch(url,{
    method:"POST",
    headers:{
      'Content-type':"aplication/json"
    },
    body:JSON.stringify(data)
  }).then(response => response.json()).then(data =>{
    alert("DATA SUBMITTED")
  } 
    
  )
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", { required: true, maxLength: 20 })} placeholder = "Enter Your Name" /><br></br><hr></hr>
      {errors.firstName && <p>Enter your first Name.</p>}
      <input {...register("userName", { required: true, maxLength: 20 })} placeholder = "User Name" /><br></br><hr></hr>
      {errors.userName && <p>Enter your User Name.</p>}
      <input 
        {...register("mail", { required: "Email Address is required" })} 
        aria-invalid={errors.mail ? "true" : "false"} 
        placeholder = "Email"/><br></br><hr></hr>
      {errors.mail && <p role="alert">{errors.mail?.message}</p>}
      
      <input type="number" {...register("phone", { required: true })} placeholder = "Phone"/><br></br><hr></hr>
      {errors.number && <p>Enter your phone number.</p>}
      <input {...register("city", { required: true, maxLength: 20 })} placeholder = "Enter City Name" /><br></br><hr></hr>
      {errors.city && <p>Enter your Cit Name.</p>}
      <input type="submit"  style={{p:200}} />
    </form>
  );
}