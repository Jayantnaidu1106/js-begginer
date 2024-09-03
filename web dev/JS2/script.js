const form = document.querySelector('form')

form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')
    if(height<0 || height === '' || isNaN(height))
    {
         result.innerHTML = `Please enter a valid Height ${height}`;
    }
   else if(weight<0 || weight === '' || isNaN(weight))
    {
         result.innerHTML = `Please enter a valid Weight ${weight}`;}
   else
   {
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    result.innerHTML = `<span>Your BMI = ${bmi}</span>`;}
   
})