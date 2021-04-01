module.exports.signUpErrors = (err) => {
    let errors = { pseudo : '', email: '', password: ''}
    //on fait jaillir le résultat côté front

    if (err.message.includes('pseudo'))
    // si l'erreur est en relation avec le pseudo
        errors.pseudo = "Pseudo incorrect ou déjà pris";

    if (err.message.includes('email'))
        errors.email = "Email incorrect";

    if (err.message.includes('password'))
        errors.password = "Le mot de passe doit faire 6 caractères minimum";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo'))
        errors.pseudo = "Ce pseudo est déjà pris";

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email'))
        errors.email = "Cet email est déjà enregistré";

    return errors;
};




