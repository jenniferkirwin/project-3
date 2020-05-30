module.exports = function(sequelize, DataTypes) {
    const Course = sequelize.define("Course", {
        courseId: { 
            type: DataTypes.UUID, 
            primaryKey: true, 
            defaultValue: DataTypes.UUIDV4 
        },
        courseName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
    });

    Course.associate = function(models) {
        Course.hasMany(models.Enrollment, {
            foreignKey: "courseId"
        });
        Course.hasMany(models.Assignment, {
            foreignKey: "courseId"
        });
        Course.hasMany(models.Announcement, {
            foreignKey: "courseId"
        });
        Course.belongsTo(models.School);
        Course.belongsTo(models.User);
    }
  
    return Course;
  };