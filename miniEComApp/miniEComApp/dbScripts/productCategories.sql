USE [miniEcom]
GO

/****** Object:  Table [dbo].[ProductCategories]    Script Date: 03-01-2017 12:20:29 ******/
DROP TABLE [dbo].[ProductCategories]
GO

/****** Object:  Table [dbo].[ProductCategories]    Script Date: 03-01-2017 12:20:29 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

SET ANSI_PADDING ON
GO

CREATE TABLE [dbo].[ProductCategories](
	[Id] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](100) NOT NULL,
	[Description] [varchar](250) NULL,
 CONSTRAINT [PK_ProductCategories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_PADDING OFF
GO

USE [miniEcom]
GO

/****** Object:  StoredProcedure [dbo].[usp_addProductCategory]    Script Date: 04-01-2017 15:44:27 ******/
DROP PROCEDURE [dbo].[usp_addProductCategory]
GO

/****** Object:  StoredProcedure [dbo].[usp_addProductCategory]    Script Date: 04-01-2017 15:44:27 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE PROCEDURE [dbo].[usp_addProductCategory]
@name varchar(100),
@description varchar(250)
AS
BEGIN
	INSERT INTO ProductCategories(Name,Description)
	VALUES(@name, @description)
END


GO

USE [miniEcom]
GO
/****** Object:  StoredProcedure [dbo].[usp_addProductCategory]    Script Date: 1/10/2017 10:11:07 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
Create PROCEDURE [dbo].[usp_addNewProduct]
@name varchar(100),
@description varchar(250)
AS
BEGIN
	INSERT INTO Products(Name,[Description])
	VALUES(@name, @description)
END











