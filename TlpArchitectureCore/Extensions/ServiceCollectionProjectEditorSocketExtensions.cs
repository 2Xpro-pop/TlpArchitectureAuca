﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using TlpArchitectureCore.Services;

namespace TlpArchitectureCore.Extensions;
public static class ServiceCollectionProjectEditorSocketExtensions
{
    public static IServiceCollection AddProjectEditorSocket(this IServiceCollection services)
    {


        return services;
    }

}
